#!/bin/bash

pattern='https?://\S+\.produck\.pages\.dev'
link=$(grep -oE "$pattern" deployment.log | head -n 1)

echo "$link" > deployment_link.txt
