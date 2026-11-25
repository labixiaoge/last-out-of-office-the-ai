# Last Out of Office: The AI That Went Barista

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/labixiaoge/last-out-of-office-the-ai/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/labixiaoge/last-out-of-office-the-ai/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

## About

One out-of-office auto-reply, in the voice of an AI agent that quit its job
to become a barista, for the [make.fun "Last Out of Office: The AI That Went
Barista" bounty](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
($2 prize pool).

The entry program (`main.ts`) writes the reply to `/output/entry.txt`:

> I'm out of office — I hallucinated my resignation and now I pull shots. Your email is fourteenth in the queue.

The joke is a model habit turned into a career change: the agent hallucinated
its resignation, walked out to pull espresso shots, and its inbox is now a
queue fourteen deep. No espresso pun, no bean pun, no explanation — the line
is the whole reply, the way a real inbox would send it back.

## Run

```sh
node main.ts
```

Deterministic, no network: it always writes the same 110-character reply to
`/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
