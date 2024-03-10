#include <iostream>
#include <cstdio>
#include <string>

int main() {
    FILE* pipe = popen("python ./Analyser/sentimentScript.py", "w");
    if (!pipe) {
        std::cerr << "Failed to open pipe to Python script" << std::endl;
        return 1;
    }
    
    std::string input_str = "You are worst person evern";
    fprintf(pipe, "%s\n", input_str.c_str());
    pclose(pipe);
    
    return 0;
}
