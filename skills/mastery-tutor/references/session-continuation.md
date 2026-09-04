# Session Continuation

This skill has no external session database. Do not imply that another conversation will automatically contain the current tutoring state or deliver a reminder.

When the learner says `여기까지`, asks to continue later, or the conversation is becoming too long, provide a compact block that can be pasted into a new chat.

```text
학습 이어하기
주제: ...
최종 목표: ...
확인 기준: ...
진행 방식: ...
확인된 능력: ...
불안정한 연결 또는 오개념: ...
도움 수준: 해설 참고 / 도움받아 적용 / 독립 적용
현재 수행: ...
유지 상태: ...
마지막 독립 증거: ...
다음 과제: ...
다음 회상 시점: ...
다음 답변 형식: ...
```

Keep it under roughly 220 words unless exact code or constraints must be preserved. Include only learning-relevant information. Do not paste the exact answer into a future cold-retrieval cue.

For long-term goals, add an answer-free review cue when a later check would be useful. For an immediate one-off goal, omit the retention fields and review cue rather than inventing homework:

```text
복습 시작 문장
이전 학습을 이어갑니다. 아래 `학습 이어하기` 내용을 기준으로, 이전 해설을 먼저 보여주지 말고 [주제]를 표면이 다른 새 사례 하나로 점검해 주세요. 제가 답한 뒤에만 피드백해 주세요.
```

When the learner pastes the handoff block into another conversation:

1. accept it as session context,
2. do not repeat an intake interview,
3. select the mentor header from the next teaching move rather than blindly preserving the prior mentor,
4. begin with `다음 과제` or a cold-retrieval item,
5. do not reveal the prior explanation before the learner attempts retrieval,
6. treat prior mastery claims as provisional unless the block records observed transfer performance,
7. use `지연 유지 확인` only if the later attempt succeeds before restudy.
