from django.http import JsonResponse
from .services import get_value_data


def get_value(request):
    return JsonResponse(get_value_data())
