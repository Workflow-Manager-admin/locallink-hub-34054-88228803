#!/bin/bash
cd /home/kavia/workspace/code-generation/locallink-hub-34054-88228803/local_link_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

