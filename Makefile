BUILD_CMD = yarn esbuild src/index.ts \
	--bundle \
	--format=esm \
	--jsx-factory=h \
	--jsx-fragment=DocumentFragment \
	--define:process='{"env":{"NODE_ENV":"development"}}' \
	--loader:.css=text \
	--outfile=augmented/dist/index.js

.PHONY: build
build:
	$(BUILD_CMD)
	cp plugin.toml links/
	cp -r links/ ~/.var/app/space.crankshaft.Crankshaft/data/crankshaft/plugins

.PHONY: watch
watch:
	$(BUILD_CMD) --watch

.PHONY: format
format:
	prettier src --write
