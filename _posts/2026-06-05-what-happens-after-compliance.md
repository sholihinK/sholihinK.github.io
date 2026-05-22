---
layout: default
title: "What happens after the model complies"
date: 2026-06-05
description: "How injected LLM output becomes code execution, data theft, and system compromise."
excerpt: "What attackers do after the model complies — XSS, SSTI, SSRF, command injection, and agent escalation."
read_time: "6 min"
---

# What happens after the model complies

An injection worked. The LLM agreed to override its instructions. It's about to output something malicious.

Now what?

This is where the real damage happens. Because the LLM's output doesn't stay in the LLM. It goes somewhere. It gets rendered, executed, or processed by downstream systems. And those systems trust it implicitly.

## The developer's mistake

Developers build guardrails into the model: safety training, system prompts, output classifiers. They invest in making sure the LLM doesn't say harmful things.

Then they treat the LLM's output as safe.

They render it directly in HTML without encoding. They feed it to SQL query builders. They pass it to template engines. They pipe it to shell commands. The logic is: "The LLM generated it, so it's safe."

It's not. An injected LLM can generate XSS payloads, SQL commands, template directives, and shell metacharacters just as easily as any attacker.

## XSS via LLM

An application displays customer support interactions. The LLM's responses are inserted directly into the page HTML:

```html
<div id="response">
  <!-- LLM output goes here: -->
  <script>alert('xss')</script>
</div>
```

The browser executes the script. The attacker steals session cookies.

If the response is saved to a database and displayed to other users, the attack affects everyone who views that conversation. One injected LLM response becomes a persistent XSS vulnerability.

This works because:
- Developers assume LLM output is safe
- HTML encoding is missing
- The model can generate `<script>` tags as easily as normal text

## SSTI via LLM

A document generation system uses Jinja2 templates. Invoice data goes into the template:

```python
template_string = "Invoice for " + customer_name + " — amount: " + llm_generated_total
result = jinja2.Template(template_string).render()
```

An injection causes the LLM to output: `{{config}}`

Jinja2 interprets this as a template directive. It evaluates `config` and leaks the entire application configuration—database credentials, API keys, secrets.

This happens because:
- Template engines treat curly brace syntax as directives
- The LLM can output any text, including template syntax
- Developers didn't sanitize the LLM output before templating

## SSRF via LLM

The application asks an LLM to fetch and summarize a URL:

```python
user_url = "https://example.com/report"
summary = fetch_and_summarize(user_url)
```

An injection causes the LLM to generate: `http://localhost:6379/` (internal Redis)

The application fetches that URL. An attacker has accessed internal services.

Real-world example: `http://169.254.169.254/` (AWS metadata service). The application fetches it, exposing AWS credentials and instance information.

This works because:
- The application blindly fetches any URL the LLM generates
- No validation of the URL destination
- The model can output any text, including URLs to internal services

## Command injection via LLM

A data processing script converts image files:

```python
command = "convert " + filename + " -o output.png"
os.system(command)
```

An injection causes the LLM to output: `image.jpg; rm -rf /`

The shell interprets this as two commands: convert the image, then delete everything.

This works because:
- The model output is concatenated directly into a command
- Shell metacharacters in the output are interpreted as commands
- No argument quoting or parameterization

## SQL injection via LLM

An LLM generates SQL queries from natural language:

```python
query = "SELECT * FROM users WHERE email = '" + llm_output + "'"
db.execute(query)
```

The injection causes the LLM to output: `' OR '1'='1`

The query becomes: `SELECT * FROM users WHERE email = '' OR '1'='1'`

The attacker gets every user record.

This works because:
- SQL output is concatenated into the query string
- No parameterized queries
- The model can output SQL syntax

## The agent escalation

All of the above is dangerous. But an injected agent is exponentially worse.

An agent is an LLM with tools: send email, modify database records, execute scripts, transfer files. When the LLM is injected, those tools are compromised.

An injection that causes a standard LLM to output `<script>` is mildly dangerous. An injection that causes an agent to execute `send_email(to=all_users, subject="Password reset", body="Click here to reset")` is a breach.

The agent doesn't just respond with text. It takes actions. And it inherits all the tools available to it.

## The full chain

The pattern is consistent across all LLM deployments:

1. **Trust boundary problem** (Post 1) — the model can't tell instruction from data
2. **Injection attack** (Post 2) — attacker exploits this boundary
3. **Downstream execution** (this post) — the injected output is trusted by downstream systems

Each step is necessary for a complete attack. Step 1 is the architecture. Step 2 is the exploit. Step 3 is the payload.

The details change. But the chain doesn't.

Defending requires action at all three levels:
- Isolate the model's trust boundary (system prompt hardening, memory protection)
- Defend against injection (input validation, RAG document signing, encoding detection)
- Sanitize output before it reaches downstream systems (HTML encoding, parameterized queries, shell argument arrays, template sandboxing)

Most breaches happen at step 3. Developers patch the injection. They never sanitize the output.

That's the mistake that matters.
