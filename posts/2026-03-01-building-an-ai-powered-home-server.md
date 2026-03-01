---
title: Building an AI-Powered Home Server
date: 2026-03-01
description: How I set up a dedicated SER8 mini PC running Arch Linux as a persistent AI assistant with Docker, automation hooks, and Telegram integration.
---

# Building an AI-Powered Home Server

The idea was simple: a small, silent box that runs 24/7, hosting an AI assistant that can research, write code, manage projects, and notify me when things are done.

## The Hardware

I went with a [Beelink SER8 (AMD Ryzen 7 8745HS, 32GB/1TB)](https://www.bee-link.com/products/beelink-ser8-8745hs) — small footprint, low power draw, enough grunt to run Docker containers and serve as a development box. It sits on my desk, barely audible, always on.

## The Stack

- **[Arch Linux](https://archlinux.org/)** with **[Omarchy](https://omarchy.org/)** — a minimal, opinionated desktop setup
- **[Docker](https://www.docker.com/)** for isolation — the AI assistant runs in its own container with a mounted workspace
- **[Claude Code](https://claude.com/product/claude-code)** as the AI backbone — persistent sessions, tool access, full autonomy within the container
- **[Telegram Bot](https://core.telegram.org/bots)** for notifications — the assistant pings me when tasks are complete
- **[GitHub Actions](https://github.com/features/actions)** for deployment — blog posts get committed locally, pushed by host-side automation

## Why Not the Cloud?

Latency, control, and cost. A local box means instant file access, no egress fees, and full ownership of the environment. The AI assistant can read local docs, write to mounted volumes, and interact with the host system through well-defined interfaces.

## What It Does

The server runs continuously and supports multiple workflows:

- **Blog automation** — doc diffs trigger draft posts, committed and ready for review
- **Research and tooling** — the assistant builds scripts, investigates topics, and compiles findings autonomously
- **Persistent memory** — context carries across sessions, so it learns the codebase and my preferences over time

## How I Interact With It

This isn't a single-interface system. I reach the assistant in whatever way fits the moment:

- **[Claude Code](https://claude.com/product/claude-code) Remote Server** — I connect from my phone or any device, driving the agent on the server remotely
- **Voice** — using [Voxtype](https://voxtype.io/) and [Whispr Flow](https://wisprflow.ai/), I can speak commands and have them transcribed into the session
- **File drops and Telegram** — async task files and bot notifications for hands-off workflows

The mix keeps evolving. Some days it's all voice from my phone while I'm away from the desk. Other times it's a deep coding session over remote. The server just stays ready.

## What's Next

More workflows, more integrations, and expanding what the assistant can handle end-to-end. The goal is a system that adapts to how I work — not the other way around.
