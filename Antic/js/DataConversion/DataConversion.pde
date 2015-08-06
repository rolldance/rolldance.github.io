
ArrayList<String> OfficerData = new ArrayList<String>();
void setup() {
  String lines[] = loadStrings("greedy.csv");

  for (int i = 1 ; i < lines.length; i++) {
    String[] array = split(lines[i], ';');
    
    if (!array[0].equals("")) {
      OfficerData.add("\n{" + "name:\"" + array[0] + "\", " + "age:\"" + array[1] + "\", " + "dob:\"" + array[2] + "\", " + "pob:\"" + array[3] + "\", " + "school:\"" + array[4] + "\", " + "region:\"" + array[5] + "\", " + "system:\"" + array[6] + "\", " + "resume:\"" + array[7] + "\", "+"id:\"" + array[8] + "\","+"name_en:\""+array[9]+"\","+"rank:\""+array[10]+"\","+"id2:\""+array[11]+"\"}");
    }
   
  }
  printData();
  writeData();
}



void writeData(){
  PrintWriter output;
  output = createWriter("../js/data.js");
  output.println("var OfficerData = " + OfficerData + ";");
  output.flush();
  output.close();
  exit();
}

void printData(){
  println("var OfficerData = " + OfficerData + ";");
}
