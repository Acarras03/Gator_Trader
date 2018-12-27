var settings = {}

settings.web = {}
settings.web.port = process.env.PORT || 8080

settings.db = {
    host     : "sfsu-list.us.to",
    user     : "primary_user",
    password : "4w299bUxhNVydJrN0eeCjy1yBV05ml3O3sanc9nr",
    database : "gator_trader",
}

module.exports = settings