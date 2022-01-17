from aiohttp import web

routes = web.RouteTableDef()


@routes.get("/")
async def get_index(request):
    return web.json_response({})


@routes.get("/tasks")
async def get_tasks(request):
    return web.json_response(
        [
            {"title": "foo"},
            {"title": "bar"},
        ]
    )
