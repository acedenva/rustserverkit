#!/bin/bash
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:`dirname $0`/RustDedicated_Data/Plugins/x86_64

./RustDedicated -batchmode -logfile ./rust.log +server.identity "$host"
