source 'https://rubygems.org'

ruby '2.5.1'
gem 'rails', '~> 5.2.2'
gem 'puma', '~> 3.11'
gem 'pg'
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  gem 'rb-readline'
  gem 'pry-byebug'
  gem 'sqlite3', '~> 1.3', '< 1.4'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# ActiveAdmin
gem 'devise', '> 4.x'
gem 'activeadmin', github: 'activeadmin'
gem 'inherited_resources', git: 'https://github.com/activeadmin/inherited_resources'
