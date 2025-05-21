#include <stdio.h>

int main() {
    int t;
    scanf("%d", &t);  // Read number of test cases
    
    while (t--) {
        int N, R;
        scanf("%d", &N);  // Number of elements in the array
        
        int arr[N];
        for (int i = 0; i < N; i++) {
            scanf("%d", &arr[i]);  // Input array elements
        }
        
        scanf("%d", &R);  // Number of rotations
        
        // Normalize R to avoid unnecessary rotations
        R = R % N;  // If R >= N, only R % N rotations are needed
        
        // Perform the rotation
        // The new array will consist of the elements from index R to N-1
        // followed by the elements from index 0 to R-1
        for (int i = 0; i < N; i++) {
            printf("%d", arr[(i + R) % N]);  // Prin3t the rotated element
            if (i < N - 1) {
                printf(" ");  // Space between numbers except the last one
            }
        }
        printf("\n");  // Move to the next line after each test case
    }
    
    return 0;
}