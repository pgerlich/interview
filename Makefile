build: sass lint
	webpack

run:
	webpack -w

sass:
	sass --sourcemap=none ./src/sass/main.scss ./src/main.css
sass-run:
	sass --sourcemap=none --watch ./src/sass/main.scss:./src/main.css

lint:
	./node_modules/.bin/eslint ./src/components
