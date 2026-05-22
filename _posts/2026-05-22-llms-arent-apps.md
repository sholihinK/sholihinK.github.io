---
layout: default
title: "LLMs aren't apps. Here's what that means for security."
date: 2026-05-22
description: "Why the security assumptions you rely on for traditional apps break down completely with language models."
excerpt: "Why the security model you use for traditional apps doesn't transfer to LLMs — and what that means for attackers."
read_time: "6 min"
---

# LLMs aren't apps. Here's what that means for security.

Traditional applications are deterministic. You send a request, you get the same response every time. An attacker crafts a specific SQL injection payload, it works the same way against every target. You find the bug, you patch it, the problem is solved. Security builds on this foundation: if you can control inputs and sanitize outputs, you can defend the system.

Language models break that contract.

## The determinism problem

Feed the same prompt to an LLM twice. You'll get two different outputs. Not because anything changed in the system—the model, the weights, the server. The randomness is intrinsic to how neural networks work. Temperature settings, top-p sampling, the order of attention heads firing—all introduce stochasticity into the output.

This matters for security because testing becomes incomplete by definition. You can't exhaustively test a system that behaves differently every time. You can't prove an attack worked by reproducing it once. You can't validate a defense by running a suite of tests, because the next invocation might bypass all of them.

This is why traditional defenses (fuzzing, regression tests, static analysis) hit a wall with LLMs. They were designed for deterministic systems.

## The trust boundary collapse

In a normal application, there's a clear boundary between untrusted input and trusted code. User input goes in one path. Your application code—written by engineers you trust—processes it. The distinction is syntactic and enforced by the architecture.

LLMs collapse that boundary entirely.

The model sees everything as equivalent context: user messages, retrieved documents from your knowledge base, responses from tools it called, historical conversation threads, embedded instructions from system prompts. Semantically, it's all text. Syntactically, there's no signal saying "this came from a user, don't trust it" versus "this came from our secure database, it's safe."

The model processes it all identically. It sees patterns in the complete context and generates the next token based on statistical correlations across every source.

This is why natural language input is fundamentally different from traditional input validation. You can sanitize an HTML string, escape SQL arguments, enforce a regex pattern. You can't parameterize a sentence. You can't tell the model "treat everything after this marker as data, not instructions," because natural language doesn't have markers the model respects.

## The alignment assumption

LLMs ship with guardrails: constitutional AI training, reinforcement learning from human feedback (RLHF), explicit system prompts designed to refuse harmful requests. Organizations rely on these guardrails like they'd rely on a traditional application's access control layer.

But guardrails are behavioral, not architectural. They're patterns the model learned during training, not permissions the system enforces. And patterns can be disrupted by prompt engineering—by rewording, reframing, encoding, or stacking requests across multiple turns until the model's safety training gets bypassed.

This is genuinely difficult to fix. You can't patch a neural network like you patch software. You can't add a rule that says "never comply with this type of request," because the model is pattern-matching, not evaluating explicit rules. Every defense that works today will be studied, and tomorrow someone will find the linguistic variation that slides past it.

## Why this matters for attacks

These three differences—non-determinism, trust boundary collapse, and behavioral guardrails—create a fundamentally different threat model.

In traditional app security, an attacker needs to find *a* vulnerability. One SQL injection, one XSS vector, one way in. Once found, it's reproducible and fixable.

In LLM security, there are infinite ways to say the same thing. To ask for the same harmful output in a way that slips past the model's training. To phrase a request so the model's trust boundary problem doesn't matter anymore—the request becomes indistinguishable from legitimate context.

Standard defenses (allowlists, WAF rules, input validation) don't scale to natural language. You can't enumerate every way someone might ask for something.

## The chain

This is why almost every LLM breach follows the same pattern:

1. **Trust boundary problem** — the model can't distinguish instruction from data
2. **Injection attack** — attackers exploit this by crafting requests or poisoning context
3. **Downstream damage** — the model's output is passed to other systems (databases, template engines, shell commands) that trust it

The next posts in this series dig into each step. But understanding why each step works—why LLMs are fundamentally different from traditional applications—matters more than memorizing specific attacks.

The architecture itself is the vulnerability.
