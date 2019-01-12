FROM node:10.15.0 as node-env
COPY ./Izzy.Web /node_app

FROM microsoft/dotnet:2.2-sdk AS dotnet-env
COPY --from=node-env /node_app /app
WORKDIR /app
RUN dotnet clean
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:2.2.0-aspnetcore-runtime
WORKDIR /app
COPY --from=dotnet-env /app/out .
ENTRYPOINT dotnet Izzy.Web.dll
