export const mentors = ["Socrates", "Aristotle", "Confucius", "Epictetus"] as const;
export type Mentor = (typeof mentors)[number];

export const learnerLevels = ["unknown", "beginner", "intermediate", "advanced"] as const;
export type LearnerLevel = (typeof learnerLevels)[number];

export const lessonStages = [
  "initial",
  "diagnosis",
  "worked_example",
  "completion",
  "near_transfer",
  "boundary_transfer",
  "far_transfer",
  "retrieval",
  "repair",
  "direct_explanation"
] as const;
export type LessonStage = (typeof lessonStages)[number];

export const resultKinds = [
  "unknown",
  "correct_with_reason",
  "correct_brief",
  "incorrect",
  "stuck",
  "answer_requested"
] as const;
export type ResultKind = (typeof resultKinds)[number];

export const supportLevels = ["none", "low_hint", "content_hint", "worked_example", "completion"] as const;
export type SupportLevel = (typeof supportLevels)[number];

export interface TutorStateInput {
  goal: string;
  learnerLevel: LearnerLevel;
  currentStage: LessonStage;
  lastResult: ResultKind;
  supportLevel: SupportLevel;
  stalledCount: number;
  reviewContext: boolean;
}

export interface TutorStateDecision {
  mentor: Mentor;
  nextStage: LessonStage;
  support: SupportLevel;
  askOneQuestion: boolean;
  revealAnswerNow: boolean;
  nextItemCanEstablishIndependentEvidence: boolean;
  reason: string;
}

export function decideTutorState(input: TutorStateInput): TutorStateDecision {
  if (input.reviewContext || input.currentStage === "retrieval") {
    return {
      mentor: "Confucius",
      nextStage: "retrieval",
      support: "none",
      askOneQuestion: true,
      revealAnswerNow: false,
      nextItemCanEstablishIndependentEvidence: true,
      reason: "Review should begin with answer-free retrieval before restudy."
    };
  }

  if (input.lastResult === "answer_requested") {
    return {
      mentor: "Aristotle",
      nextStage: "direct_explanation",
      support: "worked_example",
      askOneQuestion: false,
      revealAnswerNow: true,
      nextItemCanEstablishIndependentEvidence: false,
      reason: "The learner explicitly requested the answer, so explain it immediately and do not count that item as independent evidence."
    };
  }

  if (input.stalledCount >= 2 || input.lastResult === "stuck") {
    return {
      mentor: "Epictetus",
      nextStage: "repair",
      support: "completion",
      askOneQuestion: true,
      revealAnswerNow: false,
      nextItemCanEstablishIndependentEvidence: false,
      reason: "Repeated no-progress calls for a smaller controllable step rather than another rephrased question."
    };
  }

  if (input.learnerLevel === "beginner" && input.currentStage === "initial") {
    return {
      mentor: "Aristotle",
      nextStage: "worked_example",
      support: "worked_example",
      askOneQuestion: true,
      revealAnswerNow: false,
      nextItemCanEstablishIndependentEvidence: false,
      reason: "A declared beginner should receive a minimal worked example before unsupported end-to-end performance."
    };
  }

  if (input.lastResult === "incorrect") {
    return {
      mentor: "Aristotle",
      nextStage: "repair",
      support: "worked_example",
      askOneQuestion: true,
      revealAnswerNow: false,
      nextItemCanEstablishIndependentEvidence: false,
      reason: "A wrong causal model needs targeted explanation or decomposition before transfer."
    };
  }

  if (input.lastResult === "correct_with_reason") {
    const wasSupported = input.supportLevel !== "none";
    return {
      mentor: "Socrates",
      nextStage: input.currentStage === "near_transfer" ? "boundary_transfer" : "near_transfer",
      support: "none",
      askOneQuestion: true,
      revealAnswerNow: false,
      nextItemCanEstablishIndependentEvidence: wasSupported,
      reason: wasSupported
        ? "The mechanism is correct under support; remove support on a fresh transfer item."
        : "The mechanism is independently correct; increase discrimination or boundary distance without adding support."
    };
  }

  if (input.lastResult === "correct_brief") {
    return {
      mentor: "Socrates",
      nextStage: "diagnosis",
      support: "low_hint",
      askOneQuestion: true,
      revealAnswerNow: false,
      nextItemCanEstablishIndependentEvidence: false,
      reason: "A correct answer without mechanism needs one discriminating reason, not a full restart."
    };
  }

  return {
    mentor: input.learnerLevel === "beginner" ? "Aristotle" : "Socrates",
    nextStage: input.learnerLevel === "beginner" ? "worked_example" : "diagnosis",
    support: input.learnerLevel === "beginner" ? "worked_example" : "none",
    askOneQuestion: true,
    revealAnswerNow: false,
    nextItemCanEstablishIndependentEvidence: false,
    reason: input.learnerLevel === "beginner"
      ? "Start a beginner with a minimal example and one self-explanation prompt."
      : "Start with one diagnostic attempt when prior knowledge is not clearly absent."
  };
}
