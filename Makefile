deploy:
		ssh o2switch_digitalia 'cd ~/sites/macao.digitalia-solutions.com && git stash && git pull origin main -f && make install'

 
# to run the install command the below files must first exist
# if not run the associated commands to create them
install: vendor/autoload.php public/storage .env  public/build/manifest.json
		php artisan cache:clear
		php artisan config:clear
		php artisan route:clear
		php artisan view:clear
		php artisan event:clear
		php artisan clear-compiled
		php artisan optimize
		php artisan ziggy:generate
		php artisan typescript:transform --force


# if .env does not exist, make a copy and generate encryption key.
.env:
		cp .env.example .env
		php artisan key:generate

#  if the public storage link does not exist, added it.
public/storage:
		php artisan storage:link


# if vendor/autoload.php does not exist or its version is older than composer.json
# run the install command and create the autoload file again in case composer.lock is changed (run the command again)
vendor/autoload.php: composer.lock
		composer install
		touch vendor/autoload.php



# if public/build/manifest.json does not exist or its version is older than package.json
# run the install command
public/build/manifest.json: package.json
	npm install
	npm run build