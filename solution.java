class Solution {
    public static void main(String[] args) {
        System.out.println(solution(0));
    }

    public static String solution(int idIndex) {
        String conCat = "2357111317192329";
        int idLen = 5;
        int lastPrime = 29;
        int i = lastPrime;
        mainLoop: while (conCat.length() < idIndex + idLen) {
            i++;
            if (i % 2 == 0) {
                // - System.out.println(i + " even");
                continue mainLoop;
            }
            for (int divisor = 3; divisor <= i / 2; divisor += 2) {
                // System.out.println(i + " forloop " + divisor);
                if (i % divisor == 0) {
                    // - System.out.println(i + " divisible");
                    // if divisble by one of these numbers then is not prime
                    continue mainLoop;
                }
            }
            // - System.out.println("conCat");
            // if made it here then it must be a prime
            conCat += i;
        }
        // - System.out.println(i + " done");
        return conCat.substring(idIndex, idIndex + idLen);

    }

}