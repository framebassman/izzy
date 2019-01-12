FROM microsoft/dotnet:2.2-sdk AS build-env

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

COPY ./Izzy.Web /app
WORKDIR /app
RUN dotnet clean
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:2.2.0-aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT dotnet Izzy.Web.dll
