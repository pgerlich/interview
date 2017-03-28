### Installation
After pulling down the repository, you'll want to install all of the node packages with:
`npm -i
`
### Building
Use 'make build' to build the SASS files, run the linter (to validate JS syntax), and build the output JS file.

### Active development
If you want to use watchers, you can open two terminals. 

- In one, run 'make run-sass' to have the SASS watcher constantly rebuilding the sass.
- In the other, run 'make run' to have webpack watch and constantly rebuild the JS

If anyone wants to add a command for hot reloading that would be dope. I didn't mess with it because it didn't work on first attempt. :)

### Contributing
Any and all contributions must be made through code reviewed pull requests. There will be no direct, unapproved pushes to master.

With questions just reach out on the facebook group, or my email is paul@gerlich.io

