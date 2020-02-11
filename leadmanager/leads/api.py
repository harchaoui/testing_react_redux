from leads.models import Lead
from rest_framework import viewsets,permissions
from .serializer import LeadSerializer


# create the viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    
    # serializer_class 
    serializer_class = LeadSerializer

