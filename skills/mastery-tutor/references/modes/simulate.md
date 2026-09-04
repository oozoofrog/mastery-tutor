# Simulate — Real Error Simulator

## Goal

Put the learner into a realistic situation where the target concept is necessary and a plausible mistake is likely.

## Scenario

Provide only the concrete goal, evidence available at that moment, realistic constraints, and one decision, diagnosis, prediction, or patch request. Do not explain the target concept before the first attempt unless the learner is a clear novice, lacks the prerequisite, or asks for explanation first. Do not leak the answer through titles, variable names, or leading questions.

For code, use the learner's repository only when appropriate. Do not manufacture a failure in production files; use existing evidence, a scratch case, or a hypothetical diff.

## Cycle

1. Ask for one concrete action or hypothesis.
2. Evaluate the causal reasoning, not only the final choice.
3. Identify whether the earliest failure is a missing prerequisite, misconception, execution slip, weak diagnostic strategy, or overgeneralization.
4. Match one repair to that failure: explanation/example, contrast, focused redo, evidence comparison, or boundary case.
5. Use no more than two focused repair turns on the same broken link.
6. If the learner remains stuck, asks for help, or lacks a prerequisite, state that the method is changing and give the concise causal explanation or a worked example.
7. After explicit instruction, use a completion problem before removing support when the learner is novice.
8. Use near transfer first; then use a contrasting or materially varied scenario when it serves the real goal.
9. Require independent fresh application before `독립 적용 확인`. Use a later answer-free retrieval before `지연 유지 확인`.

Example:

```text
Q1. 가장 유력한 원인과 다음 확인을 2~4문장으로 적어 보세요.

답변 틀(선택): 가설은 ... / 근거는 ... / 다음 확인은 ...
```

Never replace diagnosis with vague prompts such as “다시 생각해 보세요.” Point to a specific conflict in the evidence. Productive struggle is bounded preparation for explanation, not a test of endurance.
