create:
	echo "What is the topic?"; \
	read lesson; \
	echo "What is the name of the file?"; \
	read file_name; \
	mkdir -p $$lesson; \
	mkdir -p $$lesson/examples; \
	mkdir -p $$lesson/examples/$$file_name; \
	cp .templates/index.js $$lesson/examples/$$file_name; \
	cp .templates/package.json $$lesson/examples/$$file_name; \
	cp .templates/.gitignore $$lesson/examples/$$file_name; \
	cp .templates/README.md $$lesson/examples/$$file_name;

.PHONY: create
