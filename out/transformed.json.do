redo-ifchange cleaned.json ../bin/fc_to_os ../mapping.txt

<cleaned.json json -a uri | sort | uniq | sed 's/.html$//' | while read FC_PLAY; do
  printf "fc/${FC_PLAY}.txt\0"
  printf "fc/${FC_PLAY}.offset.txt\0"
  OS_PLAY=$(grep -P "^${FC_PLAY}\t" ../mapping.txt | cut -f2)
  printf "os/${OS_PLAY}.txt\0"
  printf "os/${OS_PLAY}.offset.txt\0"
  printf "${OS_PLAY}.mapping.txt\0"
done | xargs -0 redo-ifchange

<cleaned.json ../bin/fc_to_os
