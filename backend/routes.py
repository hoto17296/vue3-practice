from dataclasses import dataclass, asdict
from aiohttp import web


@dataclass
class Task:
    title: str


tasks = [Task(title="foo"), Task(title="bar")]

routes = web.RouteTableDef()


@routes.get("/tasks")
async def get_tasks(request):
    return web.json_response([asdict(task) for task in tasks])


@routes.post("/tasks")
async def post_tasks(request):
    data = await request.json()
    task = Task(**data)
    tasks.append(task)
    return web.json_response(asdict(task))
