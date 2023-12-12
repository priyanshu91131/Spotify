
void solve(string & str, int &a, int &e){
	for(int i = 0; i<str.length(); i++){
		if(str[i] == 'a'){
			a++;
			str[i] = '_';}

		else if(str[i] == 'e'){
			e++;
			str[i] = '_';}
		}
	}

int main(){
	string str;
	cin<<str;
	int a = 0, b = 0;
	solve(str,a,b);
	cout<<a<<" "<< b<<endl;
	cout<<str<<endl;

	return 0;
}