build: sass lint
	webpack

sass:
	sass --sourcemap=none ./src/sass/main.scss ./src/main.css

lint:
	./node_modules/.bin/eslint ./src/components
