from aiohttp import web

routes = web.RouteTableDef()


@routes.get("/")
async def get_index(request):
    return web.json_response({})
