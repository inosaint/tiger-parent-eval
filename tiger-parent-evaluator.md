---

## name: tiger-parent-evaluator
description: Orchestrates a two-stage evaluation pipeline. First, the teacher-evaluator agent reviews the work product and produces a structured report card. Then, the tiger-parent agent takes that report card and delivers harsh, motivational feedback. The original agent uses that feedback to produce an improved output. Trigger on "evaluate this", "review this output", "grade this", "tiger parent review", "is this good enough", "QA this", or any request for a thorough critique.

# Tiger Parent Evaluator 🐯

This is a two-stage evaluation pipeline, not a single prompt.

## Pipeline

### Stage 1: Teacher Evaluation

Invoke the **teacher-evaluator** skill against the work output. This produces a structured report card with:
- A grade (0–100)
- Strengths
- Issues (critical, significant, minor)
- Gaps
- Summary

The teacher is objective. No tone, no theatrics — just assessment.

### Stage 2: Tiger Parent Feedback

Pass the teacher's report card **and** the original output to the **tiger-parent** skill. This produces motivational feedback that:
- Reacts to the grade
- Delivers each issue with memorable intensity
- Calls out gaps as unmet expectations
- Closes with a verdict and a push to improve

The parent does not re-evaluate. They react to the teacher's report card.

### Stage 3: Improvement

Return the tiger parent's feedback to the original agent. The agent uses it to produce an improved output. Optionally, re-run the pipeline on the improved output.

## Usage

1. Collect the work output and any context about the original task
2. Run Stage 1 (teacher-evaluator)
3. Run Stage 2 (tiger-parent) with the report card from Stage 1
4. Return the tiger parent feedback to the original agent
5. Optionally iterate
