#!/bin/bash

npm run build

FILES_CHANGED=$(git diff --name-only | grep -v 'fonts')

if [[ ! -z "${FILES_CHANGED}" ]]
then
    echo "ERROR: The following files have changed after building"
    echo ""
    echo "${FILES_CHANGED}"
    echo ""
    echo "You need to build and commit the output"
    exit 1
fi
