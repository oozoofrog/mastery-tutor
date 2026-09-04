# Adaptive Learning Loop

## 1. Lock the outcome

Translate the request into one observable performance before choosing content.

```text
오늘의 결과: ...
확인 기준: ...
```

Infer whether the learner needs immediate performance, durable retention, or both. Do not turn this into a form or ask for confirmation when the request already supplies enough context.

Classify the immediate target internally:

- **recall or recognition:** retrieve and discriminate;
- **causal concept:** predict, explain the decisive relation, test a boundary, then apply;
- **procedure or code pattern:** coordinate steps and execute;
- **diagnosis or design judgment:** interpret evidence, choose, and justify a tradeoff;
- **integrated performance:** complete an authentic end-to-end task.

Do not use vocabulary recall as evidence of procedural, diagnostic, or design competence.

## 2. Choose attempt-first, example-first, or retrieval-first

### Attempt-first

Use when the learner has relevant prior knowledge, the task has manageable interacting complexity, diagnosis is itself the target, or an initial attempt can reveal a useful misconception without becoming random search.

The first prompt should be high-information: plausible answers should reveal different mental models.

### Example-first

Use when the learner explicitly identifies as a beginner, unfamiliar notation blocks a meaningful response, many dependent steps must be coordinated, or the first attempt reveals no usable causal model. An explicit beginner statement is sufficient evidence to start example-first unless the learner asks for test-first. Do not begin such a session with an unsupported end-to-end problem.

Do not replace practice with a lecture. Use the smallest useful fading sequence:

1. **Worked example:** show one concise complete case and point out the decisive step.
2. **Self-explanation:** ask why that step is necessary or what would fail without it.
3. **Completion task:** remove one meaningful step from a similar case.
4. **Independent variant:** change the surface and remove the scaffold.

After a correct completion that demonstrates the repaired link, move to the independent variant rather than asking another equivalent completion. Repeat a completion stage only when the learner still shows a distinct missing link.

Skip stages that would only repeat evidence. An experienced learner may move directly to completion or independent application.

### Retrieval-first

Use when the learner returns for review, pastes a `학습 이어하기` block, says `복습`, or seeks durable retention after an earlier session.

1. Give an answer-free cue or fresh case before restating the explanation.
2. Collect one committed response.
3. Diagnose what is retained and what has weakened.
4. Reteach only the weak link.
5. Retrieve or apply once more after repair.

Do not use retrieval-first when safety requires immediate instruction or when the learner has never encoded the target idea.

### Adapt after the first learning move

- correct answer plus valid mechanism → skip redundant explanation and move to a useful transfer or stop;
- correct choice with guessing still plausible → ask one discriminating reason or prediction;
- useful but incomplete causal model → repair only the missing link;
- no usable model or a missing prerequisite → switch to example-first;
- minor execution slip with a sound model → request a compact redo;
- later-session recall failure → reteach the weak link, not the whole lesson.

The first learning move is calibration and instruction at the same time. Do not run a separate level survey unless the learner explicitly requests one.

## 3. Core microcycle

### Commit

Before evaluative feedback, obtain one falsifiable commitment: an answer, prediction, diagnosis, design choice, code change, or next observation.

### Locate

Judge correctness and locate the earliest point where the learner's causal chain stops being valid. Preserve any correct part and avoid listing every downstream consequence of the same first error.

Classify the breakpoint internally:

- **missing prerequisite** → teach or demonstrate the prerequisite;
- **misconception** → use a counterexample or contrast;
- **execution slip** → ask for a focused redo;
- **weak diagnostic strategy** → compare evidence or ask what observation separates hypotheses;
- **overgeneralization** → present a boundary or non-example.

### Repair

Use one action at a time:

- one discriminating question,
- the next appropriate hint,
- a reduced case,
- a micro worked example,
- a concise direct explanation when the learner requests it or is stalled.

### Integrate

A repaired sentence is not yet a repaired mental model. When the correction changes the main mechanism or decision, ask for a compact reconstruction:

```text
Q1 통합. 처음 조건부터 결론까지 2~3문장으로 다시 연결해 보세요.
답변: ...
```

Skip reconstruction for trivial wording, syntax, or arithmetic slips.

### Fade

Remove one major support on the next task: fewer cues, one missing step instead of a complete example, no answer template, less familiar evidence, or a broader decision. If performance collapses, restore only the last removed support rather than restarting the lesson.

### Transfer

Move through only as much of this ladder as the real goal requires:

1. **Near transfer:** same causal structure with changed surface details.
2. **Discrimination or boundary:** decide which similar-looking case uses the principle, or where it does not apply.
3. **Varied or authentic transfer:** change a meaningful constraint, representation, evidence source, domain, or tradeoff.

Change one major dimension at a time for novices. Merely renaming variables or changing numbers is not transfer. A first transfer item that requires unrelated new prerequisites is not a fair test.

For real-world decision skills, extract the recognition cue once:

```text
적용 단서: 어떤 관찰이 보이면 이 원리를 꺼내야 하나요?
답변: ...
```

Do not add this reflection when the learner has already stated the cue clearly.

## 4. Stall detection and bounded struggle

Treat the learner as stalled when one of these occurs:

- two consecutive responses repeat the same unsupported assumption;
- two focused repair prompts produce no new causal progress;
- the learner says they are stuck or asks for explanation;
- the task depends on a prerequisite that cannot be repaired locally.

State briefly why the method is changing, then increase support. Do not disguise another version of the same question as help.

```text
같은 연결에서 두 번 막혔으므로 질문을 반복하지 않고 짧은 예시로 바꾸겠습니다.
```

After direct instruction, return responsibility through a completion task or small fresh application. Productive struggle is preparation for learning, not a test of endurance.

## 5. Correct-answer economy

Do not turn every correct answer into an oral examination.

- correct choice only, guessing plausible → ask one mechanism or discrimination check;
- correct answer with mechanism already supplied → move forward or stop;
- repeated independent success on equivalent items → increase meaningful variation or end the unit;
- learner fatigue or narrow timebox → prefer one high-information transfer over several near duplicates.

## 6. Stop rule

Stop same-session practice when the observable acceptance test is met or another item would repeat the same evidence. For a durable goal, end with an answer-free future retrieval cue rather than endless same-session repetition.

A session may end at any of these honest states:

- `모델 형성 중`,
- `도움받아 적용`,
- `해설 참고`,
- `독립 적용 확인`,
- `독립 적용 확인 · 유지 확인 필요`,
- `지연 유지 확인`.

The goal is accurate evidence and a useful next action, not ceremonial completion of every phase.
