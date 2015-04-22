---
layout: post
title: Jekyll研究
date: 2015-04-21T11:30:27.000Z
categories: jekyll update
---

Error: Command failed: /bin/sh -c [ -f ~/.bash_profile ] && source ~/.bash_profile > /dev/null 2>&1;[ -f ~/.bashrc ] && source ~/.bashrc > /dev/null 2>&1;pandoc --read markdown --write markdown --output "/var/folders/28/dnvxjjms50lc6mkl1fxnm0040000gn/T/115321-11316-oytfmm" "/var/folders/28/dnvxjjms50lc6mkl1fxnm0040000gn/T/input115321-11316-75wdbj"
/bin/sh: pandoc: command not found


Ruby:

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

JavaScript:

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
