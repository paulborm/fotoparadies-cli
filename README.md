[![NPM version](https://img.shields.io/npm/v/fotoparadies-cli.svg)](https://www.npmjs.com/package/fotoparadies-cli)

# Fotoparadies CLI

> Fotoparadies CLI is an **unofficial** tool for checking the status of an order at dm Foto-Paradies directly in the terminal.

## Table of Contents

1. [Installation](#installation)
2. [Setup](#setup)
3. [Usage](#usage)
4. [Directory Structure](#directory-structure)
5. [Legal](#legal)

## Installation

**Global**

```sh
npm install fotoparadies-cli -g
```

**Via npx**

```sh
npx fotoparadies-cli
```

> See [Usage](#Usage) for further instructions

## Setup

In order to use the cli you have to specify the correct api url. Therefor add it as environment variable to your system. Replace `<API_URL>` with the actual url.

> ⚠️ **Because this is no official tool I will NOT provide any api endpoint or other data to the public.**

**Bash**

```sh
echo 'export FOTOPARADIES_API_URL=<API_URL>' >> ~/.bash_profile
```

**Zsh**

```sh
echo 'export FOTOPARADIES_API_URL=<API_URL>' >> ~/.zshenv
```

## Usage

```sh
fotoparadies --shopNo 1234 --orderNo 123456
```

> Install it on your machine or use via npx. See [Installation](#Installation)

**Options**

| Option                 | Description               |
| ---------------------- | ------------------------- |
| -S, --shopNo <number>  | add the shop number       |
| -O, --orderNo <number> | add the order number      |
| -V, --version          | output the version number |
| -d, --debug            | output debugging          |
| -h, --help             | output usage information  |

## Directory Structure

- `lib/` is intended for code that can run as-is
- `bin/` is for any executable scripts, or compiled binaries used with, or built from your module.

> Directory Structure for JavaScript/Node Projects described [here](https://gist.github.com/tracker1/59f2c13044315f88bee9) by Michael J. Ryan.

## Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by dm Foto-Paradies, dm-drogerie markt or any of its affiliates or subsidiaries. This is an independent and unofficial API. Use it at your own risk. I will not provide any infrastructural or personal information of the original service.
