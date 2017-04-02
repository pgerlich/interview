build: sass lint
	webpack

run:
	webpack -w
zip:
	mkdir build
	cp src/index.html build/
	cp src/main.css build/
	cp src/bundle.js build/
	zip -r build.zip build
	rm -rf build

sass:
	sass --sourcemap=none ./src/sass/main.scss ./src/main.css
sass-run:
	sass --sourcemap=none --watch ./src/sass/main.scss:./src/main.css

lint:
	./node_modules/.bin/eslint ./src/components
