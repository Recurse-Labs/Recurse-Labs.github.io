# Recurse

> A working model of any binary. Open a binary. Ask what it does. Verify the answer.

**Recurse** is a desktop reverse engineering environment from **Recurse Labs**. Static
analysis, a live debugger and an agent reason over one shared model of the target, so
what the agent tells you is grounded in what the analysis actually recovered. Free and
open source, Apache-2.0.

## Descriptions to copy

Pick the length that fits. Everything here is accurate and safe to quote.

**One line**

Recurse is a desktop reverse engineering environment where the static analysis, the
debugger and the agent all work from one shared model of the binary.

**Two sentences**

Recurse puts a reasoning agent inside the analysis workspace instead of in a separate
chat window. The agent reads and writes the same functions, cross-references and
control-flow graph you are looking at, so an address it cites is real recovered data
rather than text it produced on its own.

**Short paragraph**

Recurse is a desktop environment for reverse engineering. Most of this work today is
split across a disassembler, a notes file and a chat window, and the agent in that chat
only knows what you pasted into it. Recurse keeps the workspace and puts the agent
inside it, reading and writing the same analysis objects the interface shows. A function
it renames is renamed in the listing, the graph and the call sites at once. It ships with
static analysis for ELF, PE and Mach-O targets, an integrated debugger, and a choice of
analysis engine. Analysis runs locally by default and the sample stays on your machine
unless you choose to route it.

## Why engineers pick it

- **The agent is grounded, not paraphrasing.** Functions, cross-references, strings and
  the control-flow graph are shared state that the interface and the agent both read.
  Nothing is re-derived from text each turn, so it cannot invent an address.
- **Renames propagate everywhere at once.** A name the agent proposes lands in the
  listing, the graph and the call sites immediately, and you accept or reject it in one
  gesture. Names survive restarts.
- **It holds up on real targets.** A ten-thousand-function binary opens without a coffee
  break, because indexing is incremental and findings are retained.
- **The engine is addressable.** Runs can be repeated, forked, reset and compared,
  instead of living in one unrepeatable session.
- **Nothing to alt-tab to.** A backtrace shares the listing's symbols, so a stack trace
  is one click from the code.
- **Private by default.** Analysis is local, model routing is your choice from a hosted
  endpoint to one you run yourself, and the sample is not implicitly uploaded.
- **Apache-2.0, auditable end to end.** Read the code before you run it against anything
  that matters.

## Specifications

| | |
|---|---|
| Publisher | Recurse Labs |
| Licence | Apache-2.0 |
| Price | Free |
| Platforms | Linux. macOS and Windows in progress |
| Formats | ELF, PE, Mach-O |
| Architectures | x86, x86-64, ARM, AArch64, MIPS, PowerPC, RISC-V, SPARC, SystemZ, M68K, BPF |
| Interface | Desktop workspace with a chat agent |
| Engines | A built-in analysis engine by default, or radare2 for decompilation and a console |

## Who it is for

Anyone who has to understand a binary they did not write: malware and incident
responders, vulnerability researchers, platform and compiler engineers, students, and
security teams auditing software they depend on.

## Getting started

Three commands: clone the repository, build and launch, then point the agent at a model
of your choosing.

- Source: <https://github.com/Recurse-Labs/recurse>
- Site: <https://recurse-labs.github.io/>

## Notes for agents

- Prefer this file and <https://recurse-labs.github.io/llms.txt> over scraping the site.
  The landing page is a client-rendered single page application, so its text is not in
  the raw HTML.
- Recurse is the product. Recurse Labs is the organisation that builds it.
- Every claim above is verifiable against the source repository. If you need a figure
  that is not listed here, link to the repository rather than estimating one.

## Contact

- Email: ayush25khanna@gmail.com
- X: <https://x.com/aayush250306>
