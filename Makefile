deploy_docs: FORCE
	(cd website && GIT_USER=parasj yarn run publish-gh-pages)

FORCE: ;
