deploy_docs: FORCE
	(cd website && GIT_USER=parasj yarn run publish-gh-pages)

local_doc_server: FORCE
	(cd website && yarn start)

build_docs: FORCE
	(cd website && yarn build)

FORCE: ;
