FROM mcr.microsoft.com/dotnet/core/sdk:3.1.201-alpine3.11 AS build-env

RUN apk add --update 'nodejs=12.15.0-r1' 'npm=12.15.0-r1'

COPY ./Izzy.Web /app
WORKDIR /app
RUN dotnet clean
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1.3-alpine3.11
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT dotnet Izzy.Web.dll
