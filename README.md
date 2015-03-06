Cyanite / Graphite-API / Grafana
================================
Sets up various containers to provide a means of storing metrics via graphite into a cassandra instance via cyanite.

This uses cyanite, developed by Pierre-Yves Ritschard and graphite-cyanite/graphite-api developed by Bruno Renié

To use this, you will need the following on your host:
- [virtualbox]
- [vagrant]
- [docker] - For Linux
- [boot2docker] - For Windows / MacOSX

This has been tested on Ubuntu and RedHat variants.  For getting Boot2Docker running on MacOSX, see [How to use Docker on MacOSX]

Description Of The Components
-----------------------------
- [cyanite] - cassandra backed carbon daemon and metric web service
- [graphite-cyanite] - A plugin for using graphite-web with the cassandra-based Cyanite storage backend
- [graphite-api] - Graphite-web, without the interface. Just the rendering HTTP API
- [grafana] - An open source, feature rich metrics dashboard and graph editor 
- [cassandra] - open source distributed database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. Used by cyanite to store the graphite data instead of the traditional graphite whisper files.

Building The Docker Containers
==============================
To build out the project, run the following

    sudo -s
    ./build.sh

Alternatively, there is a Vagrantfile in the directory to build out the servers via vagrant

Usage
=====
The grafana dashboard is available at http://localhost

Write metrics via graphite at localhost:2003

Run ./test.sh to generate some test metrics - 1, 5 and 15 minute load averages

[cyanite]: https://github.com/pyr/cyanite
[graphite-cyanite]: https://github.com/brutasse/graphite-cyanite
[graphite-api]: https://github.com/brutasse/graphite-api
[grafana]: http://grafana.org/
[cassandra]: http://cassandra.apache.org/
[virtualbox]: https://www.virtualbox.org/
[vagrant]: https://www.vagrantup.com/
[docker]: https://www.docker.com/
[boot2docker]: http://boot2docker.io/
[How to use Docker on MacOSX]: http://viget.com/extend/how-to-use-docker-on-os-x-the-missing-guide
