#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the fotoparadies command.
 * @author Paul Borm
 */

'use strict';

const cli = require('../lib/cli');

cli.execute(process.argv);
