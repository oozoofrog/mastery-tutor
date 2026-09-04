# Directly Typeable Answer Contracts

Choose the smallest contract that exposes the reasoning being tested. Examples are conveniences, never mandatory syntax.

## O/X

Use one statement by default.

```text
Q1. `await` 뒤에도 앞서 검사한 actor 상태는 자동으로 유효하다.

답: O 또는 X
```

Ask for a reason only when it is part of the target or when a correct guess would be ambiguous:

```text
답: X — 이유는 한 문장
```

For a small requested batch, write statements vertically:

```text
Q1. ...
Q2. ...
Q3. ...

답: `1 X, 2 O, 3 X` 또는 `XOX`
```

Never put O/X columns in a table.

## Single choice

Use stable letters and vertical options.

```text
Q1. 가장 먼저 다시 검증할 것은 무엇인가요?

A. ...
B. ...
C. ...
D. ...

답: B
```

Accept `B`, `2`, the full option text, or an unambiguous sentence.

Do not ask the learner to justify every routine choice. Request one discriminating reason when guessing is plausible or the alternatives represent different mental models.

## Multiple choice

Say explicitly that more than one answer may be correct.

```text
Q1. 복수 선택입니다.

A. ...
B. ...
C. ...
D. ...

답: A, C
```

## Ordering

```text
답: B > A > C
```

## Prediction

```text
답변 틀(선택): 예상은 ... / 이유는 ...
```

## Diagnosis

Request a short answer and use at most three parts.

```text
Q1. 가장 유력한 원인과 다음 확인을 2~4문장으로 설명하세요.

답변 틀(선택): 가설은 ... / 근거는 ... / 다음 확인은 ...
```

## Explanation

```text
답변 틀(선택): 핵심은 ... / 그렇게 되는 이유는 ... / 성립하지 않는 경우는 ...
```

Do not require an exception when the current question only tests the central mechanism.

## Decision or design choice

```text
답변 틀(선택): 선택은 ... / 기준은 ... / 감수할 단점은 ...
```

## Code change proposal

```text
답변 틀(선택): 문제 위치는 ... / 변경은 ... / 예상 결과는 ...
```

When actual code is required, ask for only the smallest relevant function or diff unless broader context is necessary.

## Worked-example self-explanation

After showing an example, ask about the decisive relation rather than requesting a summary of everything:

```text
Q1. 이 예시에서 `await` 뒤에 상태를 다시 확인해야 하는 이유는 무엇인가요?
답변: 이유는 ...
```

## Completion task

Remove one meaningful step, not arbitrary words:

```text
Q2. 다음 코드에서 안전한 상태 전이를 만들기 위해 빠진 한 단계를 적어 보세요.
답변: 빠진 단계는 ...
```

## Contrast or boundary

```text
Q3. A와 B 중 재진입 위험이 있는 사례는 무엇이며, 결정적 차이는 무엇인가요?
답변 틀(선택): 위험한 것은 ... / 차이는 ...
```

## Cold retrieval

Do not embed the answer in the cue:

```text
복습 Q1. 이전 설명을 보지 않고, actor가 데이터 경쟁을 막아도 논리적 경쟁이 남을 수 있는 이유를 2문장으로 설명해 보세요.
답변: ...
```

## Feynman teach-back

Do not pre-structure the explanation so heavily that the structure hides gaps.

```text
답변: 10살에게 말하듯 3~5문장으로 설명해 보세요.
```

## Mixed batch

Use only when explicitly helpful:

```text
답: `1 X / 2 B / 3 가설은 ...`
```

Do not use a grid.

## Ambiguity handling

Ask for clarification only when two materially different meanings remain.

```text
두 해석이 가능합니다.
A. ...
B. ...

답: A 또는 B
```
