#include<iostream>
using namespace std;

int towerofhanoi( int n, char start, char rod, char final)
{
    int count = 0;
	if ( n > 0 )
	{
		count = towerofhanoi ( n-1, start, final,rod );
        cout<<"Move Disk "<<n<<" "<<start<<"-->"<<final<<endl;
		
        if(start == 'S' & final== 'D')
            count += 2;
        if(start == 'D' & final== 'S')
            count += 2;
        else if(start == 'S' & final== 'T')
            count += 1;
        else if(start == 'T' & final== 'S')
            count += 1;
        else if(start == 'D' & final== 'T')
            count += 1;
        else if(start == 'T' & final== 'D')
            count += 1;
        count+= towerofhanoi( n-1,rod, start, final);
	}
    return count;
}

int main()
{
	char  start= 'S',temp= 'T', final= 'D';
	int n;
	cin>>n;
    int c = towerofhanoi( n, start,rod, final);
    cout<<"Total cost="<<c;
	return 0;
}