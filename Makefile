.PHONY : npm-dev dev clean
npm-dev:
	npm run dev

node:
	node ./dist/app.bundle.js

clean:
	rm -rf ./dist/

dev: npm-dev node clean