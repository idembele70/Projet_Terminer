
/**
 * doublon
 */
//import java.util.Scanner;
import java.util.Arrays;

public class doublon {
    public static void main(String[] args) {
        String[] list =
    {
        "coco",
        "pedro",
        "pedro",
        "pedro",
        "pedro",
        "jaco",
        "jaco",
        "coco",
        "jaco",
    };
   String[] listSansDoublons = new String[list.length];
   String[] listPropre = new String[listSansDoublons.length];

   for (int i = 0; i < list.length; i++) {
       int nbTab = -1;
       String motSansDoublons = list[i];
        for (int j = 0; j < listSansDoublons.length; j++) {
            if (listSansDoublons[j] == null || listSansDoublons[j].equals(motSansDoublons)) {
                nbTab = j;
            }
        }
        if (nbTab >=0){
            listSansDoublons[nbTab] = motSansDoublons;            
        } 
        
   }
   System.out.print("La liste des mot sans doublons : ");
   for (int k = 0; k < listSansDoublons.length; k++) {
    if (listSansDoublons[k] != null) {
        System.out.print(listSansDoublons[k] + ", ");
    
    }
   }
    }

}