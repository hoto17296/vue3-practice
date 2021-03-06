from os import getenv
from aiohttp import web
from routes import routes


@web.middleware
async def cors_middleware(request, handler):
    if request.method == "OPTIONS":
        return web.Response(
            headers={
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Origin": getenv("CORS_ALLOW_ORIGIN", "*"),
            }
        )
    response = await handler(request)
    response.headers["Access-Control-Allow-Origin"] = getenv("CORS_ALLOW_ORIGIN", "*")
    return response


app = web.Application(middlewares=[cors_middleware])
app.add_routes(routes)
