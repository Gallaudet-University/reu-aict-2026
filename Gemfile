source "https://rubygems.org"

# Modern Jekyll — the site is built by our own GitHub Actions workflow,
# so we don't need to be pinned to the github-pages gem's old Jekyll 3.9.
gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Windows and JRuby do not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# kramdown v2 ships without the GFM parser by default
gem "kramdown-parser-gfm"

# Lock http_parser.rb on JRuby
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Bundled stdlib gems needed under Ruby 3.4+
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "webrick"
