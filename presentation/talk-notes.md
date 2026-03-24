# Tiger Parent Evaluator — Talk Notes

## Opening: "Is your Claude scared of their parent?"

Open with the joke. Show a screenshot of the tiger parent giving a 72/100 on something that "works fine." Use a meme image of a south asian parent reacting to low marks.

## Origin Story

While this skill creation started off as a joke, actually testing it out made me realize that running evals on your plan would actually help you find things you wouldn't normally know were missing. This would help you solve issues when you aren't technically strong by addressing them in the plan stage.

"This started as a joke. I made a tiger parent that roasts Claude's output. But then I actually ran it on a plan I was about to ship... and it caught three things I completely missed. Not because I'm bad at my job — because nobody catches everything on the first pass. That's what evals are for. A second pair of eyes with impossibly high standards."

## Demystify the Jargon

In the world of AI, we use terminologies that are way too overengineered. A prompt to an LLM becomes an agent. Prompt templates are called skills.

| What it actually is | What AI calls it |
|---|---|
| A prompt | An "agent" |
| A prompt template | A "skill" |
| if/else logic | "Orchestration" |
| A for loop | An "agentic loop" |
| Search, then ask | "RAG" |
| "You are a helpful assistant" | A "system persona" |
| Calling a function | "Tool use" |
| Chaining two prompts | A "workflow" / "pipeline" |

"Strip away the jargon and you realize — most of this is just software engineering with a probabilistic function call in the middle."

## What Are Evals?

In the simplest terms: evals are just checking the homework.

Your agent produces output — code, a plan, a document. An "eval" is any structured process that asks: "Is this actually good?"

Types:
- **Automated** — a test suite, a linter, a rubric-based grader (like this tiger parent skill)
- **Human** — you reading the output critically
- **LLM-as-judge** — another AI reviewing the first AI's work (this is what the tiger parent does)

**Is a skill an LLM-as-judge?**

It kind of is, but there's a useful distinction: LLM-as-judge is the general concept — you use an LLM to evaluate another LLM's output. It's a technique. A skill is the delivery mechanism — a reusable prompt template that tells Claude *how* to judge.

"A skill is a recipe. LLM-as-judge is the technique. The tiger parent is a recipe that tells Claude exactly how to judge your work."

## The Key Insight: How Evals Help

You don't need to be an expert to catch problems — you just need a good evaluator.

1. You ask Claude to make a plan or write code
2. You're not sure if it's good — maybe you're not deeply technical in that area
3. You run the tiger parent eval on it
4. It comes back: "You forgot error handling. No tests. Your API has no rate limiting. 68/100."
5. Now you know what to ask for in the next iteration — even though you didn't know those things were missing yourself

The eval surfaces the gaps you didn't know existed. That's the superpower. It turns "I don't know what I don't know" into a concrete punch list.

## Why the Eval Surfaces Gaps

Because the person writing the plan and the eval are operating from different instructions.

- **The planner** optimizes for what you asked for
- **The evaluator** checks against what a high standard demands

"Your prompt says 'build me an API.' The plan builds you an API. The tiger parent says 'where's the rate limiting, the auth, the error handling?' — because you didn't ask, but you should have."

## Skill vs Sub-Agent

**Skill:** Claude reads new instructions and changes behavior within the same conversation. Same context window, same memory. Like handing Claude a card that says "now be a tiger parent."

**Sub-agent:** A separate Claude instance is spawned. Gets its own context, does its job, returns a result. The parent Claude never sees the sub-agent's internal reasoning — just the final output.

"A skill is giving Claude a new hat. A sub-agent is hiring a contractor. Same person could do the work — the question is whether you want a conversation or a deliverable."

Converting to sub-agent: Instead of Claude adopting the tiger parent persona inline, Claude would call the Agent tool, pass it the plan + the tiger parent rubric, and say "evaluate this." That separate Claude instance critiques the plan in isolation and hands back the report.

When to use sub-agent:
- When the evaluation is expensive and you don't want it polluting your main context
- When you want to run multiple evaluations in parallel (tiger parent + security reviewer + performance reviewer)
- When you want isolation — the sub-agent can't accidentally influence the next step

When to use skill:
- When you want the evaluation to be conversational — you can push back, ask follow-ups
- When context matters — the skill can see your whole conversation history
- Simpler, less overhead

## No Talking Back — The Cultural Architecture

"The builder doesn't get to argue back. If you grew up with a tiger parent, you know — you don't talk back. You take the feedback, you fix it, and you come back with a better version. That's literally what this eval does."

This is architecturally accurate: a sub-agent returns a verdict. The builder never sees the evaluator's reasoning process, can't negotiate, can't explain itself. It just receives the critique and acts on it. The power dynamic is one-directional by design.

In a skill (same conversation), Claude can rationalize its own choices. In a sub-agent, the evaluator only sees the output — it has no sympathy for why you made a decision. Just like a real code reviewer who wasn't in the room when you wrote it.

"A sub-agent sounds fancy. It's just: run the same LLM twice with different prompts. First prompt: 'make a plan.' Second prompt: 'rip this plan apart.' That's it. That's the whole architecture."

## "Log kya kahenge?" (What will people say?)

"Did you consider how other developers will read this code? What about the next team that maintains it?"

"And just like real life — the tiger parent's standards are impossibly high. You get a 95, they ask about the other 5. Your plan handles auth, error handling, and testing? 'Where's the rate limiting? Where's the caching strategy? Why didn't you consider observability?' You will never get a perfect score. And that's the point — because in production, nothing is ever perfect either."

## Narrative Arc (Summary)

1. **Demystify the jargon** — it's just prompts, not magic
2. **The architecture** — two Claudes, different jobs, builder and critic
3. **The cultural metaphor** — tiger parent, no talking back, impossibly high standards
4. **The payoff** — it surfaces the gaps you didn't know to ask about

That bridges the comedy into the real takeaway: eval-driven workflows make you better, especially when you're outside your comfort zone.
