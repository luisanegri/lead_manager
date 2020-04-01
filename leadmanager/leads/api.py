from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset


# class LeadViewSet(viewsets.ModelViewSet):

#     permission_classes = [
#         permissions.AllowAny
#     ]

#     serializer_class = LeadSerializer

#     # methods

#     def get_queryset(self):
#         # get the leads only from the user logged
#         return self.request.user.leads.all()

#     # it allows to save the lead owner when we create the lead
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

class LeadViewSet(viewsets.ModelViewSet):

    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = LeadSerializer

# methods

# def get_queryset(self):
#     # get the leads only from the user logged
#     return self.leads.all()

# it allows to save the lead owner when we create the lead
# def perform_create(self, serializer):
#     serializer.save(owner=self.request.user)
