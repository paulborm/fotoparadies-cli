# Fotoparadies CLI

> Fotoparadies CLI is an **un-official** tool for checking the status of an order at dm Fotoparadies directly in the terminal.

## Table of contents

- [Install](#Install)
- [Setup](#Setup)
- [Usage](#Usage)
- [Directories](#Directories)
- [Legal](#Legal)

## Install

**Global**

```sh
npm install -g fotoparadies-cli
```

**Via npx**

```sh
npx fotoparadies-cli
```

See [Usage](#Usage) for further instructions

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

Use it locally on your machine or via npx.

```sh
fotoparadies --shopNo 1234 --orderNo 123456
```

**Options**

| option                 | Description               |
| ---------------------- | ------------------------- |
| -S, --shopNo <number>  | add the shop number       |
| -O, --orderNo <number> | add the order number      |
| -V, --version          | output the version number |
| -d, --debug            | output debugging          |
| -h, --help             | output usage information  |

## Directories

- `lib/` is intended for code that can run as-is
- `bin/` is for any executable scripts, or compiled binaries used with, or built from your module.

Original description from [Michael J. Ryan](https://gist.github.com/tracker1/59f2c13044315f88bee9)

## Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by dm Foto-Paradies, dm-drogerie markt or any of its affiliates or subsidiaries. This is an independent and unofficial API. Use it at your own risk. I will not provide any infrastructural or personal information of the original service.
