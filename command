cat /dev/urandom | LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1

java -jar iri-1.4.2.4.jar --testnet --testnet-no-coo-validation --snapshot=Snapshot.txt -p 14265
java -jar target/iota-testnet-tools-0.1-SNAPSHOT-jar-with-dependencies.jar Coordinator localhost 14265
