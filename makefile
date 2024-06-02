
# -e NPM_CONFIG_PREFIX=/home/node/.npm-global to fix global npm install
code:
	docker run -ti --rm \
		-v $(shell pwd)\:/usr/src/app \
		-w /usr/src/app \
		-p 8080\:5173 \
		-u "node" \
		-e NPM_CONFIG_PREFIX=/home/node/.npm-global \
		node \
		bash
